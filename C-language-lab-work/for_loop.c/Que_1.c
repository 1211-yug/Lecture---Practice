#include<stdio.h>

main(){
	
	//Que 1. print the sum of all numbers from 1 to N using a for loop.
	
	int n,i,sum = 0;
	printf("Enter any numbers:- ");
	scanf("%d",&n);
	
	for(i=1; i<=n; i++){
		sum = sum + i;
	}
	printf("The sum of all numbers:- %d\n",sum);
	
	//Que 1.1 print the sum of all numbers from 1 to N using a While loop.
	
	int a,I=1,asum=0;
	printf("\nEnter any numbers:- ");
	scanf("%d",&a);
	
	while(I<=a){
		asum = asum + I;
		I++;
	}
	printf("The sum of all numbers:- %d\n",asum);
	
	//Que 1.2 print the sum of all numbers from 1 to N using a do-While loop.
	
	int A,m=1,Asum=0;
	printf("\nEnter any numbers:- ");
	scanf("%d",&A);
	
	do{
		Asum = Asum + m;
		m++;
	}while(m<=A);
	
	printf("The sum of all numbers:- %d",Asum);
	
	
	
	
	
	
	
	
}
