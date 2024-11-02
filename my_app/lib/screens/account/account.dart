import 'package:my_app/theme/color.dart';
import 'package:my_app/utils/data.dart';
import 'package:my_app/widgets/custom_image.dart';
import 'package:my_app/widgets/icon_box.dart';
import 'package:my_app/widgets/setting_item.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AccountPage extends StatefulWidget {
  const AccountPage({ Key? key }) : super(key: key);

  @override
  _AccountPageState createState() => _AccountPageState();
}

class _AccountPageState extends State<AccountPage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: appBgColor,
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            backgroundColor: appBarColor,
            pinned: true,
            snap: true,
            floating: true,
            title: getAppBar(),
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) => buildBody(),
              childCount: 1,
            ),
          )
        ],
      )
    );
  }

  Widget getAppBar(){
    return
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const Expanded(child:
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("Account", style: TextStyle(color: textColor, fontSize: 24, fontWeight: FontWeight.w600),),
              ],
            )
          ),
          IconBox(child: SvgPicture.asset("assets/icons/setting.svg", width: 20, height: 20), bgColor: appBgColor )
        ],
      );
  }

   Widget buildBody() {
    return 
    SingleChildScrollView(
      padding: const EdgeInsets.only(left: 20, right: 20, top: 10),
      child: Column(
        children: [
          Column(
            children: <Widget>[
              CustomImage(
                profile["image"]!,
                width: 80, height: 80, radius: 100, errorBuilder: (context, error, stackTrace) {
                return const Icon(Icons.image); // Hoặc một hình ảnh thay thế nếu không tải được
              },
              ),
              const SizedBox(height: 12,),
              Text(profile["name"]!,
                style: const TextStyle(
                  color: textColor,
                  fontSize: 18,
                  fontWeight: FontWeight.w500
                ),
              ),
              const SizedBox(height: 8,),
              Text(profile["email"]!,
                    style: const TextStyle(
                      color: labelColor,
                      fontSize: 14,
                    ),
                  ),
            ],
          ),

          const SizedBox(height: 30),
          SettingItem(title: "My Orders", leadingIcon: Icons.local_mall_outlined, leadingIconColor: blue,
            onTap: (){

            }
          ),
          const SizedBox(height: 10),
          SettingItem(title: "Favorites", leadingIcon: Icons.favorite, leadingIconColor: red,
            onTap: (){

            }
          ),
          const SizedBox(height: 10),
          SettingItem(title: "Appearance", leadingIcon: Icons.dark_mode_outlined, leadingIconColor: purple,
            onTap: (){
              
            }
          ),
          const SizedBox(height: 10),
          SettingItem(title: "Notification", leadingIcon: Icons.notifications_outlined, leadingIconColor: orange,
            onTap: (){
              
            }
          ),
          const SizedBox(height: 10),
          SettingItem(title: "Privacy", leadingIcon: Icons.privacy_tip_outlined, leadingIconColor: green,
            onTap: (){

            }
          ),
          const SizedBox(height: 10),
          SettingItem(title: "Sign Out", leadingIcon: Icons.logout_outlined, leadingIconColor: Colors.grey.shade400,
            onTap: (){
              showConfirmLogout();
            },
          ),
          const SizedBox(height: 10),
        ],
      ),
    );
  }

  showConfirmLogout(){
    showCupertinoModalPopup(
      context: context, 
      builder: (context) =>
        CupertinoActionSheet(
          message: const Text("Would you like to sign out?"),
          actions: [
            CupertinoActionSheetAction(
              onPressed: (){

              },
              child: const Text("Sign Out", style: TextStyle(color: actionColor),),
            )
          ],
          cancelButton: 
            CupertinoActionSheetAction(child:
              const Text("Cancel"),
              onPressed: (){
               Navigator.of(context).pop();
              },
            )
        )
    );
  }

}
