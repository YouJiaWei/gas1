package com.example.mywebapp1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity2 extends AppCompatActivity {

    private EditText mEditText2;
    // IntentのExtra情報に設定するキー MainActivityから参照するのでpublic
    public static final String EXTRA_TEXT_MAIN =
            "com.tutorial.web.app. extra.EXTRA_TEXT_MAIN";

    private static final int UNSELECTED_ID = -1; // 未選択䛾場合䛾ID(-1)
    private RadioGroup mRadioGroup1 = null;
    private TextView mTextResult1 = null;

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

        ImageButton ichigoButton = findViewById(R.id.ichigo_button);
        ichigoButton.setOnClickListener(ichigoButtonClickListener);

        mRadioGroup1 = findViewById(R.id.radio_group);
        mTextResult1 = findViewById(R.id.text_input_result);
        Button rebutton = findViewById(R.id.re_button);
        rebutton.setOnClickListener(reButtonClickListener);

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
    // トースト画面表示ボタンイベント
    private final View.OnClickListener ichigoButtonClickListener
            = new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            Context context = getApplicationContext();
            CharSequence text = "私は🍓です、よろしくお願いします。";
            int duration = Toast.LENGTH_SHORT;
            Toast toast = Toast.makeText(context, text, duration);
            toast.show();
        }
    };

    // 選択表示ボタンイベント
    private final View.OnClickListener reButtonClickListener
            = new View.OnClickListener() {
        @Override
        public void onClick(View view) {
// 選択されているラジオボタンのIDを取得
            int checkedId = mRadioGroup1.getCheckedRadioButtonId();
            String message = "選択されていません。";
            if (UNSELECTED_ID != checkedId) {
                RadioButton checkedRadioButton
                        = mRadioGroup1.findViewById(checkedId);
                message = String.format("答えは「%s」です。",
                        checkedRadioButton.getText());
            }
            mTextResult1.setText(message);
        }
    };

}