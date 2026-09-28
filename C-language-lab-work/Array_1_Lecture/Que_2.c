#include <stdio.h>

int main()
{
    int a[50], n, i;
    float sum = 0, avg;

    printf("Enter array size: ");
    scanf("%d", &n);

    printf("Enter array elements:\n");
    for(i = 0; i < n; i++)
    {
        printf("a[%d] = ", i);
        scanf("%d", &a[i]);
        sum = sum + a[i];
    }

    avg = sum / n;

    printf("\nAverage of an Array: %.2f", avg);

}
