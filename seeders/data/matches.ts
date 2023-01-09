import { Types } from 'mongoose';

import { PlayerPosition } from '../../src/enums';
import { IMatch } from '../../src/interfaces/match';

interface MatchWithID extends IMatch {
  _id: Types.ObjectId;
}

const matches: MatchWithID[] = [
  {
    _id: new Types.ObjectId('633352e770544e542a608f22'),
    teamA: [
      {
        _id: new Types.ObjectId('633352e770544e542a608f29'),
        firstName: 'Santiago',
        lastName: 'Gigli',
        skill: 10,
        position: PlayerPosition.goalkeeper,
        fidelity: 100,
        matchesPlayed: 0,
        firebaseUid: 'M5MCzG5aCKpf0B7qpNNsi8RyjN10',
      },
      {
        _id: new Types.ObjectId('633352e770544e542a608f2a'),
        firstName: 'Julian',
        lastName: 'Vicente',
        skill: 20,
        position: PlayerPosition.flex,
        fidelity: 90,
        matchesPlayed: 1,
        firebaseUid: 'M5MCzG5aCKpf0B7qpNNsi8RyjN11',
      },
      {
        _id: new Types.ObjectId('633352e770544e542a608f2b'),
        firstName: 'Ignacio',
        lastName: 'Aristo',
        skill: 30,
        position: PlayerPosition.defender,
        fidelity: 80,
        matchesPlayed: 2,
        firebaseUid: 'M5MCzG5aCKpf0B7qpNNsi8RyjN12',
      },
      {
        _id: new Types.ObjectId('63b1ef2dc06030be7fb7b4cb'),
        firstName: 'Martin',
        lastName: 'Raveglia',
        skill: 40,
        position: PlayerPosition.flex,
        fidelity: 70,
        matchesPlayed: 3,
        firebaseUid: 'M5MCzG5aCKpf0B7qpNNsi8RyjN13',
      },
      {
        _id: new Types.ObjectId('63b1efd99726809eb2410704'),
        firstName: 'Naila',
        lastName: 'Gigho',
        skill: 50,
        position: PlayerPosition.midfielder,
        fidelity: 60,
        matchesPlayed: 4,
        firebaseUid: 'M5MCzG5aCKpf0B7qpNNsi8RyjN14',
      },
    ],
    teamB: [
      {
        _id: new Types.ObjectId('63b1efd99726809eb2410705'),
        firstName: 'Ludmila',
        lastName: 'Prestipino',
        skill: 60,
        position: PlayerPosition.midfielder,
        fidelity: 50,
        matchesPlayed: 5,
        firebaseUid: 'M5MCzG5aCKpf0B7qpNNsi8RyjN15',
      },
      {
        _id: new Types.ObjectId('63b1efd99726809eb2410706'),
        firstName: 'Lucas',
        lastName: 'Malvasia',
        skill: 70,
        position: PlayerPosition.striker,
        fidelity: 40,
        matchesPlayed: 6,
        firebaseUid: 'M5MCzG5aCKpf0B7qpNNsi8RyjN16',
      },
      {
        _id: new Types.ObjectId('63b1efd99726809eb2410707'),
        firstName: 'Facundo',
        lastName: 'de Lafuente',
        skill: 80,
        position: PlayerPosition.striker,
        fidelity: 30,
        matchesPlayed: 7,
        firebaseUid: 'M5MCzG5aCKpf0B7qpNNsi8RyjN17',
      },
      {
        _id: new Types.ObjectId('63b1efd99726809eb2410708'),
        firstName: 'Nicolas',
        lastName: 'Cagnina',
        skill: 90,
        position: PlayerPosition.goalkeeper,
        fidelity: 20,
        matchesPlayed: 8,
        firebaseUid: 'M5MCzG5aCKpf0B7qpNNsi8RyjN18',
      },
      {
        _id: new Types.ObjectId('63b1efd99726809eb2410709'),
        firstName: 'Alejandro',
        lastName: 'Lupo',
        skill: 100,
        position: PlayerPosition.striker,
        fidelity: 10,
        matchesPlayed: 9,
        firebaseUid: 'M5MCzG5aCKpf0B7qpNNsi8RyjN19',
      },
    ],
    date: new Date(),
    result: {
      teamA: 5,
      teamB: 3,
      winner: 'teamA',
    },
    status: 'Finished',
    field: 'La previa',
  },
];

export default matches;
