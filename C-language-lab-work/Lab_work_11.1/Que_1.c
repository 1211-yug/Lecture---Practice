#include<stdio.h>

int main(){
	
	//Que 1. Square of each element of 1D array using Pointer.
	
	int sn,i;
	
	printf("Enter the array size:- ");
	scanf("%d",&sn);
	
	int a[sn];
	int *p = a;
	
	printf("\nEnter array elements:- \n");
    for(int i = 0; i < sn; i++)
    {
        printf("a[%d] = ", i);
        scanf("%d", &a[i]);
    }
	
	printf("\nSquare of each element:- \n");
	for(int i = 0; i < sn; i++)
    {
        printf("%d ", (*(p + i)) * (*(p + i)));
    }
	
	return 0;
	
}