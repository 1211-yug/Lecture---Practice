#include<iostream>

using namespace std;

class Shape{

    public: 

        virtual void calculateArea() = 0;

};

class Circle : public Shape{
 
        double r;
        float pi = 3.14;

    public:

        Circle(double radius) {
                r = radius;
            }
        
        
        void calculateArea(){

            double ans = pi * r * r;
            cout << "Area of Circle is :- " << ans << endl;

        }

};

class Triangle : public Shape{

    double base,height;
    
    public:

        Triangle(double b, double h) {
            base = b;
            height = h;
        }

        void calculateArea(){
            double ans = 0.5 * base * height;
            cout << "Area of Triangle is    :- " << ans << endl;    
        }

};

class Rectangle : public Shape{

    double Length,Width;

    public:

        Rectangle(double l, double w) {
            Length = l;
            Width = w;
        }

        void calculateArea(){
            double ans = Length * Width;
            cout << "Area of Rectangle is   :- " << ans << endl;    
        }   
};

int main(){

    Shape *s;

    s = new Circle(16);
    s->calculateArea();

    s = new Triangle(8, 12);
    s->calculateArea();

    s = new Rectangle(6, 10);
    s->calculateArea(); 

    return 0;
}