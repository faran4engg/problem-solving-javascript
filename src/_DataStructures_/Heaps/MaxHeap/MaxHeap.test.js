const MaxHeap = require('.');

describe('MaxHeap', () => {
  it('Should be a class', () => {
    expect(typeof MaxHeap.prototype.constructor).toEqual('function');
  });

  const mh = new MaxHeap();

  beforeEach(() => {
    mh.destroy();
  });

  it('Should create an instance of MaxHeap', () => {
    expect(mh instanceof MaxHeap).toEqual(true);
  });

  it('Should add an element to the MaxHeap', () => {
    mh.add(10);
    expect(mh.getMax()).toEqual(10);
  });

  it('Should keep the largest element at the root', () => {
    [12, 5, 34].forEach(el => mh.add(el));
    expect(mh.getMax()).toEqual(34);
  });

  it('Should retain Heap properties after removal of an element', () => {
    [12, 45, 1, 34].forEach(el => mh.add(el));
    expect(mh.getMax()).toEqual(45);
    mh.remove();
    expect(mh.getMax()).toEqual(34);
  });

  it('Should return `null` when heap is empty', () => {
    [1, 34].forEach(el => mh.add(el));
    expect(mh.getMax()).toEqual(34);
    mh.remove();
    mh.remove();
    expect(mh.getMax()).toEqual(null);
  });

  it('Should return the elelment value on `remove()`', () => {
    [1, 34].forEach(el => mh.add(el));
    expect(mh.getMax()).toEqual(34);
    expect(mh.remove()).toEqual(34);
    expect(mh.remove()).toEqual(1);
    expect(mh.getMax()).toEqual(null);
  });
});
