export interface Partido {
    jornada: number;
    equipoLocal: string;
    equipoVisitante: string;
    golesLocal: number;
    golesVisitante: number;
}

export const PARTIDOS: Partido[] = [
    {
        jornada: 1,
        equipoLocal: 'Real Madrid',
        equipoVisitante: 'FC Barcelona',
        golesLocal: 0,
        golesVisitante: 0
    },
    {
        jornada: 1,
        equipoLocal: 'At. Madrid',
        equipoVisitante: 'Cádiz CF',
        golesLocal: 0,
        golesVisitante: 0
    },
    {
        jornada: 2,
        equipoLocal: 'Real Madrid',
        equipoVisitante: 'Cádiz CF',
        golesLocal: 0,
        golesVisitante: 0
    },
    {
        jornada: 2,
        equipoLocal: 'At. Madrid',
        equipoVisitante: 'FC Barcelona',
        golesLocal: 0,
        golesVisitante: 0
    },
    {
        jornada: 3,
        equipoLocal: 'Cádiz CF',
        equipoVisitante: 'FC Barcelona',
        golesLocal: 0,
        golesVisitante: 0
    },
    {
        jornada: 3,
        equipoLocal: 'Real Madrid',
        equipoVisitante: 'At. Madrid',
        golesLocal: 0,
        golesVisitante: 0
    }
]