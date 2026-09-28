#include<stdio.h>

int divi(int a){
	if((a % 3 == 0) && (a % 5 == 0)){
		printf("The given number is divisible by both 3 & 5.");
	}else{
		printf("The given number is not divisible by both 3 & 5.");
	}	
}

int main(){
	
	int n;
	printf("Enter any numbers:- ");
	scanf("%d",&n);
	divi(n);

	return 0;
}