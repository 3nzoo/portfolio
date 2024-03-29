import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, transform, useAnimation } from 'framer-motion';

const containerSize = 400;
const rows = [0, 1, 2, 3, 4, 5];
const columns = rows;
const boxSize = containerSize / rows.length;
const transition = { duration: 3, loop: Infinity, ease: 'easeOut' };

export function Matrix() {
  const x = useMotionValue(-boxSize);
  const y = useMotionValue(-boxSize);
  const containerRef = useRef<null | any>(null);
  const animation = useAnimation();

  const loopAnimation = () =>
    animation.start({
      x: [-boxSize, containerSize, containerSize, -boxSize, -boxSize],
      y: [-boxSize, -boxSize, containerSize, containerSize, -boxSize],
      rotate: [0, 0, 90, 90, 180, 180, 270, 270, 360],
      transition,
    });

  const stopAnimation = () => animation.stop();

  // !!! Controls the magnet effect
  const restartAnimation = async () => {
    console.log('magnet now');
    await animation.start({
      x: -boxSize,
      y: -boxSize,
      rotate: 0,
    });
    // await loopAnimation();
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    x.set(
      event.pageX - containerRef.current.getBoundingClientRect().x - boxSize / 2
    );
    y.set(
      event.pageY - containerRef.current.getBoundingClientRect().y - boxSize / 2
    );
  };

  // useEffect(() => {
  //   loopAnimation();
  //   return () => stopAnimation();
  // }, [loopAnimation, stopAnimation]);

  return (
    <div
      style={styles.page}
      onMouseEnter={stopAnimation}
      onMouseLeave={restartAnimation}
      onMouseMove={handleMouseMove}
    >
      test
      <div style={styles.container} ref={containerRef}>
        {rows.map((row, rowIndex) =>
          columns.map((column, columnIndex) => (
            <Box
              x={x}
              y={y}
              row={rowIndex}
              column={columnIndex}
              key={`${row}${column}`}
            />
          ))
        )}
        <h1> GEt THis div Bottom</h1>
        <motion.div
          style={{
            ...styles.magnet,
            x,
            y,
            border: '6px solid #FFF',
            scale: 0.5,
          }}
          animate={animation}
        />
      </div>
    </div>
  );
}

const Box = ({ x, y, row, column }: any) => {
  const top = column * boxSize;
  const left = row * boxSize;

  const angle = useMotionValue<any>(0);
  const scale = useMotionValue(0);
  const borderRadius = useMotionValue(0);
  const background = useMotionValue('');

  useEffect(() => {
    function updateProps() {
      const updatedAngle = calcAngle(top, left, x.get(), y.get());

      angle.set(updatedAngle);

      const proximity = Math.max(
        Math.abs(left - x.get()),
        Math.abs(top - y.get())
      );
      const newColor = transform(
        proximity,
        [0, containerSize - boxSize],
        ['#F00', '#60F']
      );
      const newScale = transform(
        proximity,
        [0, containerSize - boxSize],
        [0.8, 0.5]
      );
      const newBorderRadius = transform(
        proximity,
        [0, containerSize - boxSize],
        [boxSize * 0.11, boxSize * 0.33]
      );
      background.set(newColor);
      scale.set(newScale);
      borderRadius.set(newBorderRadius);
    }

    const unsubscribeX = x.onChange(updateProps);
    const unsubscribeY = y.onChange(updateProps);

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, []);

  return (
    <motion.div
      style={{
        ...styles.Box,
        position: 'absolute',
        top,
        left,
        background,
        scale,
        borderRadius,
      }}
      // rotate={angle}
    />
  );
};

function calcAngle(top: any, left: any, cursorTop: any, cursorLeft: any) {
  let angle = Math.atan2(cursorTop - left, cursorLeft - top) * (180 / Math.PI);
  return angle < 0 ? -(angle + 540) : -(angle + 180);
}

const styles = {
  page: {
    width: '500px',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  } as const,
  container: {
    position: 'relative',
    width: containerSize,
    height: containerSize,
  } as const,
  Box: {
    height: boxSize,
    width: boxSize,
  },
  magnet: {
    height: boxSize,
    width: boxSize,
    borderRadius: boxSize * 0.33,
  },
};
