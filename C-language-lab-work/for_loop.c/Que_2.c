#include<stdio.h>

main(){
	
	//Que 2. print the factorial of number N using a for loop.
	
	int n,i;
	char fact=1;
	
	printf("Enter any numbers:- ");
	scanf("%d",&n);
	
	for(i=1;i<=n;i++){
		fact = fact * i;	
	} 
	
	printf("The factorial is:- %d\n",fact);
	
	//Que 2.1 print the factorial of number N using a while loop.
	
	int A,I=1;
	char F=1;
	
	printf("\nEnter any numbers:- ");
	scanf("%d",&A);
	
	while(I<=A){
		F = F * I;
		I++;
	}
	
	printf("The factorial is:- %d\n",F);
	
	//Que 2.2 print the factorial of number N using a do-while loop.
	
	int N,a=1;
	char fa=1;
	
	printf("\nEnter any numbers:- ");
	scanf("%d",&N);
	
	do{
		fa = fa * a;
		a++;
		
	}while(a<=N);
	
	printf("The factorial is:- %d",fa);

}
