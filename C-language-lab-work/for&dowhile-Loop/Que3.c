#include<stdio.h>

main(){
	
	//Que 3. print even numbers from 1 to N using a do-while loop.
	 
    int n, i = 2;
    printf("Enter any number:- ");
    scanf("%d", &n);

    do {
        printf("%d ", i);
        i += 2;
    } while (i <= n);

	
}
