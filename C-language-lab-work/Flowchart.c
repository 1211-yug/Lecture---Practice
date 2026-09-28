#include<stdio.h>

main(){
	
	//Que1. minimum value of a,b,c.
	int a,b,c;
	
	printf("Enter A value of first number:- ");
	scanf("%d",&a);
	
	printf("Enter B value of Second number:- ");
	scanf("%d",&b);
	
	printf("Enter C value of Second number:- ");
	scanf("%d",&c);
	
	if (a < b){
		printf("The minimum value is:- %d",a);
		if(a < c){
			printf("The minimum value is:- %d",c);
		}
	}else{
		printf("The minimum value is:- %d",b);
	}
	
	printf("\n--------------------------------------");
	
	//Que2. maximum value of a,b,c.
	int A,B,C,D;
	
	printf("\nEnter A value of first number:- ");
	scanf("%d",&A);
	
	printf("Enter b value of Second number:- ");
	scanf("%d",&B);
	
	printf("Enter c value of Second number:- ");
	scanf("%d",&C);
	
	printf("Enter d value of Second number:- ");
	scanf("%d",&D);
	
	if (A > B) {
        if (A > C) {
            if (A > D) {
                printf("The maximum value is:- %d", A);
            } else {
                printf("The maximum value is:- %d", D);
            }
        } else {
            if (C > D) {
                printf("The maximum value is:- %d", C);
            } else {
                printf("The maximum value is:- %d", D);
            }
        }
    } else {
        if (B > C) {
            if (B > D) {
                printf("The maximum value is:- %d", B);
            } else {
                printf("The maximum value is:- %d", D);
            }
        } else {
            if (C > D) {
                printf("The maximum value is:- %d", C);
            } else {
                printf("The maximum value is:- %d", D);
            }
        }
    }
}
