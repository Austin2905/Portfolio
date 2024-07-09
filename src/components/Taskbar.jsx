import React, { useEffect, useRef, useState } from 'react';
import './Works.css'; // Ensure this points to your CSS file

const TrainingProgress = ({ className }) => {
    const canvasRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [accuracy, setAccuracy] = useState(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const fontSize = 16;
        let animationFrameId;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw progress bar
            ctx.fillStyle = '#4caf50';
            ctx.fillRect(50, 50, (canvas.width - 100) * (progress / 100), 30);
            ctx.strokeStyle = '#000';
            ctx.strokeRect(50, 50, canvas.width - 100, 30);

            // Draw accuracy graph
            ctx.beginPath();
            ctx.moveTo(50, canvas.height - 50);
            ctx.lineTo(canvas.width - 50, canvas.height - 50);
            ctx.lineTo(canvas.width - 50, canvas.height - 150);
            ctx.stroke();

            ctx.strokeStyle = '#f00';
            ctx.beginPath();
            ctx.moveTo(50, canvas.height - 50);
            for (let i = 1; i <= 100; i++) {
                ctx.lineTo(50 + (canvas.width - 100) * (i / 100), canvas.height - 50 - (canvas.height - 100) * (accuracy / 100));
            }
            ctx.stroke();

            ctx.fillStyle = '#fff';
            ctx.font = `${fontSize}px monospace`;
            ctx.fillText(`Progress: ${progress.toFixed(2)}%`, 50, 45);
            ctx.fillText(`Accuracy: ${accuracy.toFixed(2)}%`, canvas.width - 200, 45);

            // Animate the training progress and accuracy
            setProgress((prev) => Math.min(prev + 0.1, 100));
            setAccuracy((prev) => Math.min(prev + 0.05, 100));

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [progress, accuracy]);

    return (
        <div className={className} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
        </div>
    );
};

export default TrainingProgress;
