import java.util.Scanner;
class Rev_No
{
    public static void main(String[] args)
    {
       /*  int n,r;
        System.out.println("enter any no");
        Scanner obj=new Scanner(System.in);
        n=obj.nextInt();
        while(n>0)
        {
            r=n%10;
            System.out.print(r);
            n=n/10;
        }

    }
} */
//reverse of array elements
       int a=new int[5];
       Scanner obj=new Scanner(System.in);
       System.out.println("enter the array elements");
       for(int i=0;i<5;i++)
       {
        a[i]=obj.nextInt();
       }
       System.out.println("printed array elements are");
       for(int i=0;i<5;i++)
       {
        System.out.print(a[i]+"");
       }



