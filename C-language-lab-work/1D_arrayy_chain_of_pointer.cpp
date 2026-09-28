#include<stdio.h>

main(){
	
	//Que 1. Square of each element & print in reverse using chain of pointers
	
    int s;

	printf("Enter the array size:- ");
	scanf("%d",&s);
	
	int a[s];
	int *p[s];
	
	printf("\nEnter array elements:- \n");
	for(int i=0 ; i<s ; i++){
		printf("a[%d] = ",i);
		scanf("%d",&a[i]);
		p[i] = &a[i];
	}
	
	printf("\nReversed array elements:- \n");
	for(int i=s-1 ; i>=0 ; i--){
		printf("%d ",(*p[i])*(*p[i]));
	}
}