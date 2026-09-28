#include<stdio.h>

main(){
	
	//Que 1.The minimum number from the given 2 numbers using if else.
	int A,B;
	
	printf("Enter a value of first number:- ");
	scanf("%d",&A);
	
	printf("Enter a value of Second number:- ");
	scanf("%d",&B);
	
	if (A < B){
		printf("The minimum value is:- %d",A);
	}else{
		printf("The minimum value is:- %d",B);
	}
	printf("\n-------------------------------------------\n");
	
	//Que 2. Negative,Neutral,Positive using by if else.	
	int num;

    printf("Enter any number:- ");
    scanf("%d", &num);

    if (num > 0) {
        printf("This number is Positive.");
    }
    else if (num < 0) {
        printf("This number is Negative.");
    }
    else {
        printf("This number is Neutral.");
    }

	printf("\n-------------------------------------------\n");
	
	//Que 3. Average in total marks.
	
	float maths,english,science,ave;
	
	printf("Enter maths marks:- ");
    scanf("%f", &maths);

    printf("Enter english marks:- ");
    scanf("%f", &english);

    printf("Enter science marks:- ");
    scanf("%f", &science);
	
	ave = (maths+english+science)/3;
	
	printf("Average marks:- %f",ave);
	
	printf("\n-------------------------------------------\n");
}
