export const LOAD_PETS = 'LOAD_PETS';

export class PetActions {
  constructor() {
  }

  loadPets(pets) {
    return {
      type: LOAD_PETS,
      pets : pets
    }
  }

}
