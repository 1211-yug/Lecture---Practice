#include<stdio.h>

main(){
	
	//Que 4. print odd number from n to 1 using a while loop. 
	
	int n, i = 1;
	printf("Enter any number:- ");
	scanf("%d",&n);
	
	if (n%2==0)
		n--;
		
	while(n >= 1){
		printf("%d ",n);
		n-=2;
	}
}
