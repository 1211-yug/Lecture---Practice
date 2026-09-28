#include<stdio.h>

main(){
	
	//1.(x+y)2
	
	int x,y,Ans;
	
	printf("Enter X value:- ");
	scanf("%d",&x);
	
	printf("Enter Y value:- ");
	scanf("%d",&y);
	
	Ans = (x + y) * (x + y);
	
	printf("(x+y) = %d ,",Ans);
	
	printf("\n--------------------------\n");
	
	//2.(x-y)2
	
	int X,Y,ans;
	
	printf("Enter x value:- ");
	scanf("%d",&X);
	
	printf("Enter y value:- ");
	scanf("%d",&Y);
	
	ans = (X - Y) * (X - Y);
	
	printf("(X-Y) = %d ,",ans);
	
	printf("\n--------------------------\n");
	
	//3.(x+y)3
		
	float a,b,Result;
	
	printf("Enter A value:- ");
	scanf("%f",&a);
	
	printf("Enter B value:- ");
	scanf("%f",&b);
	
	Result = (a + b) * (a + b) * (a + b);
	
	printf("(a+b) = %f ,",Result);
	
	printf("\n--------------------------\n");
	
	//4.
	
	int A, B, temp;

    printf("Enter a :- ");
    scanf("%d ", &A);
    
    printf("Enter b :- ");
    scanf("%d ", &B);

    temp = A;
    A = B;
    B = temp;

    printf("After swapping:- ");
    printf("a = %d, b = %d", A, B);
    
    printf("\n--------------------------\n");
	
}
