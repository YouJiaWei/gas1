package com.example.mywebapp1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity2 extends AppCompatActivity {

    private EditText mEditText2;
    // IntentのExtra情報に設定するキー MainActivityから参照するのでpublic
    public static final String EXTRA_TEXT_MAIN =
            "com.tutorial.web.app. extra.EXTRA_TEXT_MAIN";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        // SubActivityを起動したIntentを取得
        //Intent intent = getIntent();
        // Intentから文字列情報を取得
        //String text = intent.getStringExtra (EXTRA_TEXT_MAIN);

        // TextViewに取得した文字列を設定
        //TextView textView = findViewById (R.id.text_main);
        //textView.setText(text);

        Button button_2 = findViewById(R.id.button_2);
        button_2.setOnClickListener(mButtonClickListener);
        mEditText2 = findViewById(R.id.input_text2);
        //mTextResult2 = findViewById(R.id.text_main2);

    }

    private final View.OnClickListener mButtonClickListener = new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            Intent resultIntent = new Intent();
            String inputStr = mEditText2.getText().toString();
            resultIntent.putExtra(EXTRA_TEXT_MAIN , inputStr );
            // 実行結果とIntentを結果として設定する
            setResult(RESULT_OK, resultIntent);
            // Activityを終了する
            finish();
        }
    };

}