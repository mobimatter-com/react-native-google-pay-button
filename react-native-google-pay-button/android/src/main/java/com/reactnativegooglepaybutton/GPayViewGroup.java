package com.reactnativegooglepaybutton;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AbsoluteLayout;

public class GPayViewGroup  extends ViewGroup {
  public GPayViewGroup(Context context) {
    super(context);
  }

  @Override
  public void onLayout(boolean b, int i, int i1, int i2, int i3) {
    int count = getChildCount();

    for (int idx = 0; idx < count; idx++) {
      View child = getChildAt(idx);
      if (child.getVisibility() != GONE) {
        child.layout(0, 0,
          0 + child.getMeasuredWidth(),
          0 + child.getMeasuredHeight());

      }
    }
  }
}
