package com.example.mywebapp1;

import androidx.activity.result.ActivityResult;
import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;


public class WebViewActivity extends AppCompatActivity {

    private ActivityResultLauncher<Intent> mActivityResultLauncher;

    private WebView mWebView;
    @SuppressLint("SetJavaScriptEnabled")
    private static final Uri URL_START_APP = Uri.parse("app://input");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_view);

        mWebView = findViewById(R.id.web_view);
        //mWebView.setWebViewClient(new WebViewClient());
        mWebView.setWebViewClient(mWebViewClient);

        // WebViewの設定を取得する
        WebSettings webSettings = mWebView.getSettings();
        // JavaScriptを有効化する
        webSettings.setJavaScriptEnabled(true);

        //mWebView.setWebChromeClient(mWebChromeClient);
        //mWebView.loadUrl("https://www.google.co.jp/");
        mWebView.loadUrl("https://sd-solen.systena.co.jp/2022_fullstack_bronze_2/yuuk/practice/form.html");

//        // Activityからの結果を受け取るコールバックを登録してActivityを起動するためのランチャーを取得
        mActivityResultLauncher = registerForActivityResult(
                new ActivityResultContracts.StartActivityForResult(), mResultCallback);

    }

    @Override
    public void onBackPressed() {
        // 戻るボタン押下時にブラウザバックを行う
        if ((null != mWebView) && mWebView.canGoBack()) {
            mWebView.goBack();
        } else {
            // 戻るページがない場合は通常の戻るボタン処理を実施
            super.onBackPressed();
        }
    }

    private WebViewClient mWebViewClient = new WebViewClient() {
        @Override
        public void onPageFinished(WebView view, String url) {
            // Javascriptを使用してtext1というIDのテキストボックスに文字列を設定
            String script = "document.getElementById('text1').value='Androidからの入力';";
            view.evaluateJavascript(script, null);
        }

        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            Uri url = request.getUrl();
            // アプリ起動用URLの場合、SubActivityを表示する
            if (URL_START_APP.equals(url)) {
                Intent intent = new Intent(WebViewActivity.this, MainActivity2.class);
                mActivityResultLauncher.launch(intent);
                return true; // URL読み込み処理をキャンセル
            }
            return false; // URL読み込み処理を実施
        }
    };

    private final ActivityResultCallback<ActivityResult> mResultCallback = new ActivityResultCallback <ActivityResult >() {
        @Override
        public void onActivityResult(ActivityResult result) { // 起動したActivityが終了した際に呼ばれるコールバック
            // resultから情報を取得
            int resultCode = result.getResultCode ();
            // RESULT_OKの場合、設定されたデータを取得
            if (RESULT_OK == resultCode) {
                // データを取得してTextViewに表示
                Intent data = result.getData();
                if (null != data) {
                    String text = data.getStringExtra (MainActivity2.EXTRA_TEXT_MAIN );
                    //mMainTextView.setText(message);
                    String script = "document.getElementById('text1').value='" +text+"';";
                    mWebView.evaluateJavascript (script, null);

                }
            }
        }
    };

}