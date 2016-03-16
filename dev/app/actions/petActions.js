export const LOAD_PETS = 'LOAD_PETS';
export const ADD_PET =   'ADD_PET';

export class PetActions {
  constructor() {
  }

  loadPets(pets) {
    return {
      type: LOAD_PETS,
      pets : pets
    }
  }

  addPet(pet) {
    return {
      type: ADD_PET,
      pet: pet
    }
  }

}
