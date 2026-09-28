#include <stdio.h>
#include <string.h>

void main(){

    //Que 2. Write a program to create a loogin mechanism by entering the right email & password.
	//You can compare it with your desired email & password.
    
	char email[50], password[50];
	
    char d_email[] = "admin@gmail.com";
    char d_pass[]  = "123456";

    printf("Enter your email:- ");
    scanf("%s", email);

    printf("Enter your password:- ");
    scanf("%s", password);

    if (strcmp(email, d_email) == 0 && strcmp(password, d_pass) == 0)
        printf("Login Successful...");
    else
        printf("Login Failed. Invalid Credentials.");

}
