#include<stdio.h>

main()
{
    int i,j;

    for(i=1 ; i<=5 ; i++)
    {
        for(j=1 ; j<=5 ; j++)
        {
            if(j==1 && i<=2 || j==5 && i<=2 || j==3 && i>=3)
                printf("Y");
            else
                printf(" ");
        }

        printf("  ");

        for(j=1 ; j<=5 ; j++)
        {
            if((j==1 || j==5) && i<5 || (i==5 && j>1 && j<5))
                printf("U");
            else
                printf(" ");
        }

        printf("  ");

        for(j=1 ; j<=5 ; j++)
        {
            if(i==1 && j>1 || i==5 && j>1 || j==1 && i>1 || i==3 && j>2)
                printf("G");
            else
                printf(" ");
        }

        printf("  ");

        for(j=1 ; j<=5 ; j++)
        {
            if(j==1 || i==1 && j<5 || i==3 && j<5 || j==5 && i==2)
                printf("P");
            else
                printf(" ");
        }

        printf("  ");

        for(j=1 ; j<=5 ; j++)
        {
            if(i==1 || j==3)
                printf("T");
            else
                printf(" ");
        }

        printf("  ");

        for(j=1 ; j<=5 ; j++)
        {
            if(j==1 || i==5)
                printf("L");
            else
                printf(" ");
        }

        printf("\n");
    }
}
