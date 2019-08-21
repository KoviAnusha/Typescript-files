import { Math } from './math';

describe('Math', () => {
  it('should create an instance', () => {
    expect(new Math()).toBeTruthy();
  });

  describe("verify math ops",()=>{
    let n1=100;
    let n2=200;
    afterAll(()=>{
      n1=100;
      n2=200;
    })
    //async() : executed in a different thread
    it("should add numbers",()=>{
      let result=new Math().add(n1,n2);
      expect(result).toEqual(300);
      expect(result).toBeGreaterThan(n1);
      expect(result).toBeDefined();
      expect(result).toBeTruthy();//object is defined or undefined
    })
  });

  describe("verify string ops",()=>{
    let s1="Anusha";
    let s2="Likhitha";
    afterAll(()=>{
       s1="Anusha";
       s2="Likhitha";
    })
    it("should add strings",()=>{
      let result=new Math().addString(s1,s2);
      expect(result).toMatch("AnushaLikhitha");
      expect(result).toBeDefined();
      expect(result).toBeTruthy();
    })
  });

  describe("verify evenodd",()=>{
    let n1=10;
    afterAll(()=>{
       n1=31;
    })
    it("should verify even or odd",()=>{
      let result=new Math().evenodd(n1);
      expect(result).toMatch("even");
      expect(result).toBeDefined();
      expect(result).toBeTruthy();
    })
  });
  describe("verify evenodd",()=>{
    let n2=31;
    afterAll(()=>{
       n2=31;
    })
    it("should verify even or odd",()=>{
      let result=new Math().evenodd(n2);
      expect(result).toMatch("odd");
      expect(result).toBeDefined();
      expect(result).toBeTruthy();
    })
  });
});

//angular and jasmine are connected by a broker by mock.