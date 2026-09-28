#include <stdio.h>

int main() {
    int syear, eyear;

    printf("Enter the first year:- ");
    scanf("%d", &syear);

    printf("Enter the second year:- ");
    scanf("%d", &eyear);

    while (syear <= eyear) {
        if (syear % 4 == 0) {
            printf("%d ", syear);
        }
        syear++;
    }
    return 0;
}

