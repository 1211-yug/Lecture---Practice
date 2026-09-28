#include<stdio.h>

int cube(int n){
	printf("cube is :- %d",n*n*n);
}

int main(){
	
	int num;
	printf("Enter any numbers:- ");
	scanf("%d",&num);
	cube(num);
	
	return 0;
}
