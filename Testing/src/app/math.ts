export class Math {
    public add(pNum1,pNum2):number{
        return pNum1+pNum2;
    }
    public addString(pStr1,pStr2):number{
        return pStr1+pStr2;
    }
    public evenodd(n1:number):string
    {
        if(n1%2==0)
        return "even";
        else
        return "odd";
    }
}
