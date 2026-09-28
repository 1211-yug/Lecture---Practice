#include<stdio.h>

main(){
	
	int s,i;
	
	printf("Enter array size:- ");
    scanf("%d", &s);
    
    int a[100];
    
    for(int i=0 ; i<s ; i++)
    {
        printf("a[%d] = ", i);
        scanf("%d", &a[i]);
    }

    printf("\nArray element :- \n");
    for(int i=0 ; i<s ; i++)
    {
        printf("%d ", a[i]);
    }
    
	printf("\n");
	
	
	printf("\n Eeven numbers:- \n");
	for(i=0 ; i<s ; i++)
	{
		if(a[i] % 2 == 0)
		{
			printf("%d ", a[i]);
		}
	}
	
	printf("\n");
	
	printf("\n odd numbers:- \n");
	for(i=0 ; i<s ; i++)
	{
		if(a[i] % 2 != 0)
		{
			printf("%d ", a[i]);
		}
	}
}