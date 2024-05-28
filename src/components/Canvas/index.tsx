import React, { useState, useRef } from 'react';
import { Stage, Layer, Line, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';
import { Box, Button } from '@mui/material';
import { ICanvasProps, LineSegment, Point } from '../../interfaces';

const Canvas: React.FC<ICanvasProps> = (props: ICanvasProps) => {
  const { imageUrl, color, thickness, setShowSettings } = props;

  const [lineSegments, setLineSegments] = useState<LineSegment[]>([]);
  const [currentPoint, setCurrentPoint] = useState<Point | null>(null);
  const [image] = useImage(imageUrl);
  
  const stageRef = useRef<any>(null);

  const handleStageClick = (event: any) => {
    const stage = stageRef.current;
    const pointerPosition = stage.getPointerPosition();
    if (pointerPosition) {
      if (!currentPoint) {
        setCurrentPoint(pointerPosition);
      } else {
        setLineSegments([...lineSegments, { start: currentPoint, end: pointerPosition, color, thickness }]);
        setCurrentPoint(pointerPosition);
      }
    }
  };

  const handleExport = () => {
    const stage = stageRef.current;
    const dataURL = stage.toDataURL({ pixelRatio: 2 });
    const link = document.createElement('a');
    link.download = 'roof-drawing.png';
    link.href = dataURL;
    link.click();
  };

  const handleClear = () => {
    setLineSegments([]);
    setCurrentPoint(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', gap: '1rem', }}>
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
        <Button variant="contained" onClick={() => { setShowSettings(true) }} sx={{ width: '10rem' }}>back</Button>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Stage
          width={700}
          height={500}
          onClick={handleStageClick}
          ref={stageRef}
          style={{ borderRadius: '0.5rem'}}
        >
          <Layer>
            <KonvaImage image={image} width={700} height={500} />
            {lineSegments.map((segment, index) => (
              <Line
                key={index}
                points={[segment.start.x, segment.start.y, segment.end.x, segment.end.y]}
                stroke={segment.color}
                strokeWidth={segment.thickness}
              />
            ))}
            {currentPoint && stageRef.current?.getPointerPosition() && (
              <Line
                points={[
                  currentPoint.x, currentPoint.y,
                  stageRef.current.getPointerPosition().x,
                  stageRef.current.getPointerPosition().y
                ]}
                stroke={color}
                strokeWidth={thickness}
              />
            )}
          </Layer>
        </Stage>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
        <Button variant="contained" onClick={handleExport} sx={{ width: '10rem' }}>Export Image</Button>
        <Button variant="contained" onClick={handleClear} sx={{ width: '10rem' }}>Clear</Button>
      </Box>
    </Box>
  );
};

export default Canvas;
