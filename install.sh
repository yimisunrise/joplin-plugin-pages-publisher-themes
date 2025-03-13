# 本地主题所在目录(请根据实际情况修改)
target_path="/home/yimi/.config/joplin-desktop/plugin-data/ylc395.pagesPublisher/themes"

# 主题的名称
theme_name="MinimalistLine"

# 检查目标目录是否存在
if [ -d "$target_path/$theme_name" ]; then
    rm -rf "$target_path/$theme_name" || { echo "Failed to remove existing directory"; exit 1; }
fi

# 复制新目录
cp -R "./$theme_name" "$target_path" || { echo "Failed to copy directory"; exit 1; }

# 输出处理成功的结果
echo "Theme '$theme_name' has been successfully applied to '$target_path'."