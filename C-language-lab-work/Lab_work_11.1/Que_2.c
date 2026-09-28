#include<stdio.h>

void main(){
	
	// Que 2. Swap two variables using Pointers. 
	
	int x,y,temp;
	
	printf("Enter the value of x:- ");
	scanf("%d",&x);
	
	printf("Enter the value of y:- ");
	scanf("%d",&y);
	
	int *p1 = &x;
	int *p2 = &y;
	
	printf("\nBefore swapping:- \n");
	printf("x:- %d\n",x);
	printf("y:- %d\n",y);
	
	temp = *p1;
	*p1 = *p2;
	*p2 = temp;
	
	printf("\nAfter swapping:- \n");
	printf("x:- %d\n",x);
	printf("y:- %d\n",y);
	
	return 0;
}