#include<stdio.h>

void main(){
	
	//Que1. areaOfcircle
	
	const float PI = 3.14;
	float radius,area;
	
	printf("Enter a radius :-");
	scanf("%f",&radius);
	
	area = PI*radius*radius;
	
	printf("Area of circle = %f",area);
	
	printf("\n-----------------------------");

	//Que2. Area of a Square

	float len,l;
	 
	printf("\nEnter a length of Square:-");
	scanf("%f",&len);
	 
	l = len*len;
	 
	printf("Area of Square :- %f",l);
	
	printf("\n-----------------------------");
	 
	//Que3. Area of a Triangle
	
	const float TR = 0.5;
	float b,h,a;
	
	printf("\nEnter a b value :- ");
	scanf("%f",&b);
	
	printf("\nEnter a h value :- ");
	scanf("%f",&h);
	
	a = TR*b*h;
	
	printf("\nArea of a Triangle :- %f",a);
	
	printf("\n-----------------------------");
	
	//Que4. Simple Interest
	
	const float IN = 100;
	float p,r,n,ANS;
	
	printf("\nEnter a p value :- ");
	scanf("%f",&p);
	
	printf("\nEnter a r value :- ");
	scanf("%f",&r);
	
	printf("\nEnter a n value :- ");
	scanf("%f",&n);
	
	ANS = p*r*n/IN;
	
	printf("\nSimple Interest :- %f",ANS);
	
	printf("\n-----------------------------");
	
	//Que5. Perimeter of a Circle
	
	const float pi = 3.14;
	float R,Per;
	
	printf("\nEnter a perimeter of a circle value :-");
	scanf("%f",&R);
	
	Per = 2*pi*R;
	
	printf("\nPerimeter of a Circle :- %f",Per);
	
	printf("\n-----------------------------");
	
}

