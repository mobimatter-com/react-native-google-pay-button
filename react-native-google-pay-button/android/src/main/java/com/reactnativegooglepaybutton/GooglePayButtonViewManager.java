package com.reactnativegooglepaybutton;

import android.graphics.Color;
import android.view.View;
import android.view.ViewGroup;
import android.view.LayoutInflater;
import android.view.ViewParent;
import android.widget.FrameLayout;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class GooglePayButtonViewManager extends SimpleViewManager<FrameLayout> {
    public static final String REACT_CLASS = "GooglePayButtonView";

    public int buttonType = 1;
    public LayoutInflater _layoutInflater;

    @Override
    @NonNull
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    @NonNull
    public FrameLayout createViewInstance(ThemedReactContext reactContext) {
        this._layoutInflater = LayoutInflater.from(reactContext);
        return new FrameLayout(reactContext);
    }

    @ReactProp(name = "type", defaultInt = 0)
    public void setType(FrameLayout view, int type) throws Exception {
        switch(type) {
           case 0:
                view.addView(_layoutInflater.inflate(R.layout.buy_with_googlepay_button, null));
                break;
            case 1:
                view.addView(_layoutInflater.inflate(R.layout.book_with_googlepay_button, null));
                break;
            case 2:
                view.addView(_layoutInflater.inflate(R.layout.checkout_with_googlepay_button, null));
                break;
            case 3:
                view.addView(_layoutInflater.inflate(R.layout.donate_with_googlepay_button, null));
                break;
            case 4:
                view.addView(_layoutInflater.inflate(R.layout.order_with_googlepay_button, null));
                break;
            case 5:
                view.addView(_layoutInflater.inflate(R.layout.pay_with_googlepay_button, null));
                break;
            case 6:
                view.addView(_layoutInflater.inflate(R.layout.subscribe_with_googlepay_button, null));
                break;
        }

        view.invalidate();
    }
}
