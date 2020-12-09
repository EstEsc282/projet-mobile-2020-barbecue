package com.example.swipe;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements GestureDetector.OnGestureListener {

    private static final String TAG = "Position Swipe";
    private float x1, x2, y1 ,y2;
    private static int MIN_DISTANCE = 150;
    private GestureDetector gestureDetector;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        this.gestureDetector = new GestureDetector(MainActivity.this, this);
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        gestureDetector.onTouchEvent(event);
        switch (event.getAction()){
            case MotionEvent.ACTION_DOWN:
                x1 = event.getX();
                y1 = event.getY();
                break;

            case MotionEvent.ACTION_UP:
                x2 = event.getX();
                y2 = event.getY();

                float valueX = x2 - x1;
                float valueY = y2 - y1;

                if(Math.abs(valueX)>MIN_DISTANCE){
                    if (x2>x1){
                        Toast.makeText(this, "Swipe à droite", Toast.LENGTH_SHORT).show();
                        Log.d(TAG, "Swipe Droit");
                    }
                    else {
                        Toast.makeText(this, "Swipe à gauche", Toast.LENGTH_SHORT).show();
                        Log.d(TAG, "Swipe Gauche");
                    }
                }

                else if(Math.abs(valueY)>MIN_DISTANCE){
                    if (y2>y1){
                        Toast.makeText(this, "Swipe en bas", Toast.LENGTH_SHORT).show();
                        Log.d(TAG, "Swipe Bas");
                    }
                    else {
                        Toast.makeText(this, "Swipe en haut", Toast.LENGTH_SHORT).show();
                        Log.d(TAG, "Swipe Haut");
                    }
                }
        }
        return super.onTouchEvent(event);
    }

    @Override
    public boolean onDown(MotionEvent e) {
        return false;
    }

    @Override
    public void onShowPress(MotionEvent e) {

    }

    @Override
    public boolean onSingleTapUp(MotionEvent e) {
        return false;
    }

    @Override
    public boolean onScroll(MotionEvent e1, MotionEvent e2, float distanceX, float distanceY) {
        return false;
    }

    @Override
    public void onLongPress(MotionEvent e) {

    }

    @Override
    public boolean onFling(MotionEvent e1, MotionEvent e2, float velocityX, float velocityY) {
        return false;
    }
}