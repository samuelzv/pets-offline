export const ADD_SHAPE = 'ADD_SHAPE';

export class ShapeActions {
  constructor() {
  }

  addShape(shape) {
    return {
      type: ADD_SHAPE,
      shape: shape
    }
  }

}
