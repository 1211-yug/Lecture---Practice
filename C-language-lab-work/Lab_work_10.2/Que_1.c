#include<stdio.h>

int sum_element(int a[], int n){
	
	int i, sum = 0;
	
    for(i = 0; i < n; i++)
    {
        sum = sum + a[i];
    }
    return sum;
}

int main(){
	
	int n,result,a[100];
	
	printf("Enter array size:- ");
	scanf("%d",&n);
	
	printf("Enter array elements:- \n");
	for(int i=0 ; i<n ; i++){
		printf("a[%d]=",i);
		scanf("%d",&a[i]);	
	}
	
	result = sum_element(a , n);
	
	printf("The sum of an array :- %d", result);
		
	return 0;
	
}
