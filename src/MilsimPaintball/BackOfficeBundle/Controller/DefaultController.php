<?php

namespace MilsimPaintball\BackOfficeBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('MilsimPaintballBackOfficeBundle:Default:index.html.twig');
    }
}
