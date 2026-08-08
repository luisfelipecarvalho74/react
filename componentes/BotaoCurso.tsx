import { useState } from "react";

export function BotaoCurso() {
    const [front, setFront] = useState<number>(0);
    const [back, setBack] = useState<number>(0);
    return(
        <div className="flex gap-4 text-center">
            <div><p className="text-2xl font-bold">Front {front}</p>
            <button className="bg-cyan-400 hover:bg-cyan-100 text-white font-bold px-4 py-2 rounded-sm" onClick={() => setFront(front + 1)}>+</button></div>
            <div><p className="text-2xl font-bold">Back {back}</p>
            <button className="bg-cyan-400 hover:bg-cyan-100 text-white font-bold px-4 py-2 rounded-sm" onClick={() => setBack(back + 1)}>+</button></div>
        </div>
    );
}