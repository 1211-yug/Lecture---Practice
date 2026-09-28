#include<stdio.h>

main(){
	
	//Que 3. print the multiplication table of number N using for loop.
	
	int n, i;

    printf("Enter any number: ");
    scanf("%d", &n);

    for (i = 1; i <= 10; i++) {
        printf("%d X %d = %d\n", n, i, n * i);
    }
	
	//Que 3.1 print the multiplication table of number N using While loop.
	
	int N,I=0;
	printf("\nEnter any numbers:- ");
	scanf("%d",&N);
	
	while(I<=9){
		I++;
		printf("%d X %d = %d\n", N, I, N * I);
	}
	
	//Que 3.2 print the multiplication table of number N using do-while loop.
	
	int A,b=0;
	printf("\nEnter any numbers:- ");
	scanf("%d",&A);
	
	do{
		b++;
		printf("%d X %d = %d\n", A, b, A * b);
	}while(b<=9);
	
}
