#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int func(vector <int> &v, int low, int high)
{
    int pivot = v[low];
    int i=low, j=high;
    while(i<j)
    {
        while(v[i]<=pivot && i<=high-1)
        i++;
        while(v[j]>pivot && j>=low+1)
        j--;
        if(i<j)
        swap(v[i], v[j]);
    }
    swap(v[low], v[j]);
    return j;
}

void quick_sort(vector <int> &v, int low, int high)
{
    if(low < high)
    {
        int partition = func(v, low, high);
        quick_sort(v, low, partition-1);
        quick_sort(v, partition+1, high);
    }
}


int main()
{
    vector <int> v = {5, 4, 3, 2, 1};
    quick_sort(v, 0, 4);
    for(auto i : v)
        cout << i << " ";
    cout << endl;
    return 0;
}