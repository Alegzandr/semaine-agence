<?php

class IndexController extends BaseController
{
    public function indexAction()
    {
        include('../app/views/home.php');
        return;
    }
}
