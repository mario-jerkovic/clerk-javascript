/*
 * =====================================================================================
 * DISCLAIMER:
 * =====================================================================================
 * This localization file is a community contribution and is not officially maintained
 * by Clerk. It has been provided by the community and may not be fully aligned
 * with the current or future states of the main application. Clerk does not guarantee
 * the accuracy, completeness, or timeliness of the translations in this file.
 * Use of this file is at your own risk and discretion.
 * =====================================================================================
 */

import type { LocalizationResource } from '@clerk/types';

export const ruRU: LocalizationResource = {
  locale: 'ru-RU',
  backButton: 'Назад',
  badge__default: 'По-умолчанию',
  badge__otherImpersonatorDevice: 'Другое устройство',
  badge__primary: 'Основной',
  badge__requiresAction: 'Требуется действие',
  badge__thisDevice: 'Это устройство',
  badge__unverified: 'Неверифицированный',
  badge__userDevice: 'Пользовательское устройство',
  badge__you: 'Вы',
  createOrganization: {
    formButtonSubmit: 'Создать организацию',
    invitePage: {
      formButtonReset: 'Пропустить',
    },
    title: 'Создать организацию',
  },
  dates: {
    lastDay: "Вчера в {{ date | timeString('ru-RU') }}",
    next6Days: "{{ date | weekday('ru-RU','long') }} в {{ date | timeString('ru-RU') }}",
    nextDay: "Завтра в {{ date | timeString('ru-RU') }}",
    numeric: "{{ date | numeric('ru-RU') }}",
    previous6Days: "Последний {{ date | weekday('ru-RU','long') }} в {{ date | timeString('ru-RU') }}",
    sameDay: "Сегодня в {{ date | timeString('ru-RU') }}",
  },
  dividerText: 'или',
  footerActionLink__useAnotherMethod: 'Использовать другой метод',
  footerPageLink__help: 'Помощь',
  footerPageLink__privacy: 'Приватность',
  footerPageLink__terms: 'Условия',
  formButtonPrimary: 'Продолжить',
  formButtonPrimary__verify: 'Verify',
  formFieldAction__forgotPassword: 'Забыли пароль?',
  formFieldError__matchingPasswords: 'Пароли совпадают.',
  formFieldError__notMatchingPasswords: 'Пароли не совпадают.',
  formFieldError__verificationLinkExpired: 'The verification link expired. Please request a new link.',
  formFieldHintText__optional: 'Опционально',
  formFieldHintText__slug: 'A slug is a human-readable ID that must be unique. It’s often used in URLs.',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__confirmDeletionUserAccount: 'Delete account',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__emailAddresses:
    'Введите или вставьте один или более адресов почты, разделенных пробелами или запятыми',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__organizationDomain: '',
  formFieldInputPlaceholder__organizationDomainEmailAddress: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldLabel__automaticInvitations: 'Enable automatic invitations for this domain',
  formFieldLabel__backupCode: 'Код восстановления',
  formFieldLabel__confirmDeletion: 'Confirmation',
  formFieldLabel__confirmPassword: 'Подтверждение пароля',
  formFieldLabel__currentPassword: 'Текущий пароль',
  formFieldLabel__emailAddress: 'Почта',
  formFieldLabel__emailAddress_username: 'Почта или имя пользователя',
  formFieldLabel__emailAddresses: 'Почтовые адреса',
  formFieldLabel__firstName: 'Имя',
  formFieldLabel__lastName: 'Фамилия',
  formFieldLabel__newPassword: 'Новый пароль',
  formFieldLabel__organizationDomain: 'Domain',
  formFieldLabel__organizationDomainDeletePending: 'Delete pending invitations and suggestions',
  formFieldLabel__organizationDomainEmailAddress: 'Verification email address',
  formFieldLabel__organizationDomainEmailAddressDescription:
    'Enter an email address under this domain to receive a code and verify this domain.',
  formFieldLabel__organizationName: 'Название организации',
  formFieldLabel__organizationSlug: 'Slug',
  formFieldLabel__password: 'Пароль',
  formFieldLabel__phoneNumber: 'Номер телефона',
  formFieldLabel__role: 'Роль',
  formFieldLabel__signOutOfOtherSessions: 'Выйти со всех других устройств',
  formFieldLabel__username: 'Имя пользователя',
  impersonationFab: {
    action__signOut: 'Выйти',
    title: 'Вы вошли как {{identifier}}',
  },
  membershipRole__admin: 'Администратор',
  membershipRole__basicMember: 'Участник',
  membershipRole__guestMember: 'Гость',
  organizationList: {
    action__createOrganization: 'Create organization',
    action__invitationAccept: 'Join',
    action__suggestionsAccept: 'Request to join',
    createOrganization: 'Create Organization',
    invitationAcceptedLabel: 'Joined',
    subtitle: 'to continue to {{applicationName}}',
    suggestionsAcceptedLabel: 'Pending approval',
    title: 'Choose an account',
    titleWithoutPersonal: 'Choose an organization',
  },
  organizationProfile: {
    badge__automaticInvitation: 'Automatic invitations',
    badge__automaticSuggestion: 'Automatic suggestions',
    badge__manualInvitation: 'No automatic enrollment',
    badge__unverified: 'Unverified',
    createDomainPage: {
      subtitle:
        'Добавьте верифицированный домен. Пользователи, чья электронная почта зарегистрирована на верифицированном домене, могут присоединяться к организации автоматически или по запросу.',
      title: 'Добавить домен',
    },
    invitePage: {
      detailsTitle__inviteFailed: 'Приглашения не удалось отправить. Исправьте следующее и повторите попытку:',
      formButtonPrimary__continue: 'Отправить приглашения',
      selectDropdown__role: 'Select role',
      subtitle: 'Пригласите новых участников в эту организацию',
      successMessage: 'Приглашения успешно отправлены',
      title: 'Пригласить участников',
    },
    membersPage: {
      action__invite: 'Пригласить',
      activeMembersTab: {
        menuAction__remove: 'Удалить участника',
        tableHeader__actions: 'Действия',
        tableHeader__joined: 'Присоединился',
        tableHeader__role: 'Роль',
        tableHeader__user: 'Пользователь',
      },
      detailsTitle__emptyRow: 'Нет участников для отображения',
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            'Invite users by connecting an email domain with your organization. Anyone who signs up with a matching email domain will be able to join the organization anytime.',
          headerTitle: 'Automatic invitations',
          primaryButton: 'Manage verified domains',
        },
        table__emptyRow: 'No invitations to display',
      },
      invitedMembersTab: {
        menuAction__revoke: 'Отозвать приглашение',
        tableHeader__invited: 'Приглашенные',
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            'Users who sign up with a matching email domain, will be able to see a suggestion to request to join your organization.',
          headerTitle: 'Automatic suggestions',
          primaryButton: 'Manage verified domains',
        },
        menuAction__approve: 'Approve',
        menuAction__reject: 'Reject',
        tableHeader__requested: 'Requested access',
        table__emptyRow: 'No requests to display',
      },
      start: {
        headerTitle__invitations: 'Приглашения',
        headerTitle__members: 'Участники',
        headerTitle__requests: 'Заявки',
      },
    },
    navbar: {
      description: 'Manage your organization.',
      general: 'General',
      members: 'Members',
      title: 'Organization',
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription: 'Напишите {{organizationName}} в поле ниже, чтобы продолжить.',
          messageLine1: 'Вы уверены, что хотите удалить эту организацию?',
          messageLine2: 'Это действие нельзя отменить.',
          successMessage: 'Вы удалили организацию.',
          title: 'Удалить организацию',
        },
        leaveOrganization: {
          actionDescription: 'Type "{{organizationName}}" below to continue.',
          messageLine1:
            'Вы уверены, что хотите покинуть эту организацию? Вы потеряете доступ к этой организации и ее приложениям.',
          messageLine2: 'Это действие нельзя отменить.',
          successMessage: 'Вы покинули организацию.',
          title: 'Покинуть организацию',
        },
        title: 'Опасность',
      },
      domainSection: {
        menuAction__manage: 'Manage',
        menuAction__remove: 'Delete',
        menuAction__verify: 'Verify',
        primaryButton: 'Добавить домен',
        subtitle:
          'Разрешите пользователям присоединяться к организации автоматически или по запросу, если домен их электронной почты верифицирован.',
        title: 'Верифицированные домены',
      },
      successMessage: 'Организация была обновлена.',
      title: 'Профиль организации',
    },
    removeDomainPage: {
      messageLine1: 'The email domain {{domain}} will be removed.',
      messageLine2: 'Users won’t be able to join the organization automatically after this.',
      successMessage: '{{domain}} has been removed.',
      title: 'Remove domain',
    },
    start: {
      headerTitle__general: 'General',
      headerTitle__members: 'Участники',
      profileSection: {
        primaryButton: '',
        title: 'Organization Profile',
        uploadAction__title: 'Logo',
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel: 'Удаление домена повлияет на приглашенных пользователей.',
        removeDomainActionLabel__remove: 'Удалить домен',
        removeDomainSubtitle: 'Удалить этот домен из числа верифицированных',
        removeDomainTitle: 'Удалить домен',
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          'Пользователи автоматически получают приглашение присоединиться к организации после регистрации и могут принять его в любое время без одобрения администратора',
        automaticInvitationOption__label: 'Автоматические приглашения',
        automaticSuggestionOption__description:
          'Пользователи автоматически получают приглашение подать заявку на присоединение к организации. Чтобы пользователь смог присоединиться к организации, администратор должен одобрить заявку.',
        automaticSuggestionOption__label: 'Автоматические рекомендации',
        calloutInfoLabel: 'Изменение способа присоединения повлияет только на новых пользователей.',
        calloutInvitationCountLabel: 'Приглашений отправлено: {{count}}',
        calloutSuggestionCountLabel: 'Рекомендаций отправлено: {{count}}',
        manualInvitationOption__description:
          'Пользователи не смогут присоединяться самостоятельно, можно добавлять их только вручную.',
        manualInvitationOption__label: 'Только ручное добавление',
        subtitle:
          'Выберите, каким способом пользователи с этим доменом электронной почты будут присоединяться к организации.',
      },
      start: {
        headerTitle__danger: 'Опасность',
        headerTitle__enrollment: 'Способы присоединения',
      },
      subtitle:
        'Домен {{domain}} верифицирован. Теперь выберите, как пользователи с этим доменом будут присоединяться к организации.',
      title: 'Update {{domain}}',
    },
    verifyDomainPage: {
      formSubtitle: 'Введите код подтверждения, отправленный на указанную почту',
      formTitle: 'Код подтверждения',
      resendButton: 'Не получили код? Отправить ещё раз',
      subtitle: 'Домен {{domainName}} должен быть верифицирован через электронную почту.',
      subtitleVerificationCodeScreen:
        'Код подтверждения верификации отправлен на почту {{emailAddress}}. Введите его сюда, чтобы продолжить.',
      title: 'Верификация домена',
    },
  },
  organizationSwitcher: {
    action__createOrganization: 'Создать организацию',
    action__invitationAccept: 'Join',
    action__manageOrganization: 'Управление организацией',
    action__suggestionsAccept: 'Request to join',
    notSelected: 'Организация не выбрана',
    personalWorkspace: 'Личное рабочее пространство',
    suggestionsAcceptedLabel: 'Pending approval',
  },
  paginationButton__next: 'Вперед',
  paginationButton__previous: 'Назад',
  paginationRowText__displaying: 'Отображение',
  paginationRowText__of: 'из',
  signIn: {
    accountSwitcher: {
      action__addAccount: 'Add account',
      action__signOutAll: 'Sign out of all accounts',
      subtitle: 'Select the account with which you wish to continue.',
      title: 'Choose an account',
    },
    alternativeMethods: {
      actionLink: 'Помощь',
      actionText: 'Don’t have any of these?',
      blockButton__backupCode: 'Используйте код восстановления',
      blockButton__emailCode: 'Отправить код на {{identifier}}',
      blockButton__emailLink: 'Отправить ссылку на {{identifier}}',
      blockButton__password: 'Войти с паролем',
      blockButton__phoneCode: 'Отправить код на {{identifier}}',
      blockButton__totp: 'Используйте аутентификатор',
      getHelp: {
        blockButton__emailSupport: 'Написать в поддержку',
        content:
          'Если вы испытваете сложности со входом в ваш аккаунт, напишите нам и мы постараемся восстаносить Ваш доступ в кратчайшие сроки.',
        title: 'Помощь',
      },
      subtitle: 'Facing issues? You can use any of these methods to sign in.',
      title: 'Использовать другой метод',
    },
    backupCodeMfa: {
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      title: 'Введите код восстановления',
    },
    emailCode: {
      formTitle: 'Верификационный код',
      resendButton: 'Переотправить код',
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      title: 'Проверьте Вашу почту',
    },
    emailLink: {
      expired: {
        subtitle: 'Вернитесь на начальную вкладку, чтобы продолжить.',
        title: 'Эта верификационная ссылка истекла',
      },
      failed: {
        subtitle: 'Вернитесь на начальную вкладку, чтобы продолжить.',
        title: 'Эта верификационная ссылка невалидная.',
      },
      formSubtitle: 'Используйте верификационную ссылку, отправленную на Вашу почту',
      formTitle: 'Верификационная ссылка',
      loading: {
        subtitle: 'Вы скоро будете перенаправлены',
        title: 'Входим...',
      },
      resendButton: 'Переотправить ссылку',
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      title: 'Проверьте Вашу почту',
      unusedTab: {
        title: 'Вкладку можно закрыть',
      },
      verified: {
        subtitle: 'Вы скоро будете перенаправлены',
        title: 'Успешный вход',
      },
      verifiedSwitchTab: {
        subtitle: 'Вернитесь на начальную вкладку, чтобы продолжить',
        subtitleNewTab: 'Вернитесь на только что открытую вкладку, чтобы продолжить',
        titleNewTab: 'Залогиньтесь на другой вкладке',
      },
    },
    forgotPassword: {
      formTitle: 'Код восстановления пароля',
      resendButton: 'Отправить код еще раз',
      subtitle: 'to reset your password',
      subtitle_email: 'First, enter the code sent to your email ID',
      subtitle_phone: 'First, enter the code sent to your phone',
      title: 'Reset password',
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: 'Восстановить пароль',
      label__alternativeMethods: 'Или, войти другим способом',
      title: 'Забыли пароль?',
    },
    noAvailableMethods: {
      message: 'Невозможно войти. Нет доступных факторов аутентификации.',
      subtitle: 'Произошла ошибка',
      title: 'Невозможно войти',
    },
    password: {
      actionLink: 'Использовать другой метод',
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      title: 'Введите пароль',
    },
    phoneCode: {
      formTitle: 'Верификационный код',
      resendButton: 'Переотправить код',
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      title: 'Проверьте ваш телефон',
    },
    phoneCodeMfa: {
      formTitle: 'Верификационный код',
      resendButton: 'Переотправить код',
      subtitle: '',
      title: 'Проверьте ваш телефон',
    },
    resetPassword: {
      formButtonPrimary: 'Сбросить пароль',
      requiredMessage:
        'An account already exists with an unverified email address. Please reset your password for security.',
      successMessage: 'Ваш пароль успешно изменен. Выполняется вход, подождите.',
      title: 'Сбросить пароль',
    },
    resetPasswordMfa: {
      detailsLabel: 'Необходимо верифицировать вашу личность перед восстановлением пароля',
    },
    start: {
      actionLink: 'Зарегистрироваться',
      actionLink__use_email: 'Использовать почту',
      actionLink__use_email_username: 'Использовать почту или имя пользователя',
      actionLink__use_phone: 'Использовать номер телефона',
      actionLink__use_username: 'Использовать имя пользователя',
      actionText: 'Нет аккаунта?',
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      title: 'Войти',
    },
    totpMfa: {
      formTitle: 'Верификационный код',
      subtitle: '',
      title: 'Двухфакторая верификация',
    },
  },
  signInEnterPasswordTitle: 'Введите Ваш пароль',
  signUp: {
    continue: {
      actionLink: 'Войти',
      actionText: 'Уже есть аккаунт?',
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      title: 'Заполните все поля',
    },
    emailCode: {
      formSubtitle: 'Введите верификационный код, отправленный Вам на почту',
      formTitle: 'Верификационный код',
      resendButton: 'Переотправить код',
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      title: 'Верифицируйте Вашу почту',
    },
    emailLink: {
      formSubtitle: 'Используйте верификационную ссылку, оправленную Вам на почту',
      formTitle: 'Верификационная ссылка',
      loading: {
        title: 'Входим...',
      },
      resendButton: 'Переотправить ссылку',
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      title: 'Верифицируйте Вашу почту',
      verified: {
        title: 'Успешный вход',
      },
      verifiedSwitchTab: {
        subtitle: 'Вернитесь на новую открытую вкладку, чтобы продолжить',
        subtitleNewTab: 'Вернитесь на предыдущую вкладку, чтобы продолжить',
        title: 'Почта верифицирована',
      },
    },
    phoneCode: {
      formSubtitle: 'Введите верификационный код, отправленный на Ваш телефон',
      formTitle: 'Верификационный код',
      resendButton: 'Переотправить код',
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      title: 'Верифицируйте Ваш номер телефона',
    },
    start: {
      actionLink: 'Войти',
      actionText: 'Уже есть аккаунт?',
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      title: 'Создайте Ваш аккаунт',
    },
  },
  socialButtonsBlockButton: 'Продолжить с помощью {{provider|titleize}}',
  unstable__errors: {
    captcha_invalid:
      'Sign up unsuccessful due to failed security validations. Please refresh the page to try again or reach out to support for more assistance.',
    captcha_unavailable:
      'Sign up unsuccessful due to failed bot validation. Please refresh the page to try again or reach out to support for more assistance.',
    form_code_incorrect: '',
    form_identifier_exists: '',
    form_identifier_not_found: '',
    form_param_format_invalid: '',
    form_param_format_invalid__email_address: 'Email address must be a valid email address.',
    form_param_format_invalid__phone_number: 'Phone number must be in a valid international format',
    form_param_max_length_exceeded__first_name: 'First name should not exceed 256 characters.',
    form_param_max_length_exceeded__last_name: 'Last name should not exceed 256 characters.',
    form_param_max_length_exceeded__name: 'Name should not exceed 256 characters.',
    form_param_nil: '',
    form_password_incorrect: '',
    form_password_length_too_short: '',
    form_password_not_strong_enough: 'Ваш пароль недостаточно надежный.',
    form_password_pwned: 'Этот пароль был взломан и не может быть использован, попробуйте другой пароль.',
    form_password_size_in_bytes_exceeded:
      'Ваш пароль превышает максимально допустимое количество байтов, сократите его или удалите некоторые специальные символы.',
    form_password_validation_failed: 'Неверный пароль',
    form_username_invalid_character: '',
    form_username_invalid_length: '',
    identification_deletion_failed: 'You cannot delete your last identification.',
    not_allowed_access: '',
    passwordComplexity: {
      maximumLength: 'менее {{length}} символов',
      minimumLength: '{{length}} или более символов',
      requireLowercase: 'букву в нижнем регистре',
      requireNumbers: 'цифру',
      requireSpecialCharacter: 'специальный символ',
      requireUppercase: 'букву в верхнем регистре',
      sentencePrefix: 'Ваш пароль должен содержать',
    },
    phone_number_exists: 'This phone number is taken. Please try another.',
    zxcvbn: {
      couldBeStronger: 'Ваш пароль подходит, но мог бы быть надежнее. Попробуйте добавить больше символов.',
      goodPassword: 'Хорошая работа. Это отличный пароль.',
      notEnough: 'Ваш пароль недостаточно надежный.',
      suggestions: {
        allUppercase: 'Делайте заглавными некоторые, но не все буквы.',
        anotherWord: 'Добавьте больше слов, которые менее распространены.',
        associatedYears: 'Избегайте лет, которые связаны с вами.',
        capitalization: 'Делайте заглавными не только первую букву',
        dates: 'Избегайте дат и лет, которые связаны с вами.',
        l33t: 'Избегайте предсказуемых замен букв, таких как «@» вместо «a».',
        longerKeyboardPattern: 'Используйте более длинные сочетания клавиш и несколько раз меняйте направление ввода.',
        noNeed: 'Вы можете создавать надежные пароли без использования символов, цифр или заглавных букв.',
        pwned: 'Если вы используете этот пароль в другом месте, вам следует изменить его.',
        recentYears: 'Избегайте последних лет.',
        repeated: 'Избегайте повторяющихся слов и символов.',
        reverseWords: 'Избегайте обратного написания часто используемых слов.',
        sequences: 'Избегайте частых последовательностей символов.',
        useWords: 'Используйте несколько слов, но избегайте распространенных фраз.',
      },
      warnings: {
        common: 'Это распространенный пароль.',
        commonNames: 'Распространенные имена и фамилии легко угадать.',
        dates: 'Даты легко угадать.',
        extendedRepeat: 'Повторяющиеся шаблоны символов, такие как "abcabcabc", легко угадать.',
        keyPattern: 'Короткие сочетания клавиш легко угадать.',
        namesByThemselves: 'Одни имена или фамилии легко угадать.',
        pwned: 'Ваш пароль был раскрыт в результате утечки данных в Интернете.',
        recentYears: 'Последние годы легко угадать.',
        sequences: 'Частые последовательности символов, такие как "abc", легко угадать.',
        similarToCommon: 'Этот пароль похож на часто используемый пароль.',
        simpleRepeat: 'Повторяющиеся символы, такие как "aaa", легко угадать.',
        straightRow: 'Прямые ряды клавиш на клавиатуре легко угадать.',
        topHundred: 'Это часто используемый пароль.',
        topTen: 'Это очень часто используемый пароль.',
        userInputs: 'Не должно быть никаких личных данных или данных, связанных со страницей.',
        wordByItself: 'Отдельные слова легко угадать.',
      },
    },
  },
  userButton: {
    action__addAccount: 'Добавить аккаунт',
    action__manageAccount: 'Управление аккаунтом',
    action__signOut: 'Выйти',
    action__signOutAll: 'Выйти из всех аккаунтов',
  },
  userProfile: {
    backupCodePage: {
      actionLabel__copied: 'Скопировано!',
      actionLabel__copy: 'Копировать все',
      actionLabel__download: 'Скачать .txt',
      actionLabel__print: 'Печать',
      infoText1: 'Резервные коды будут включены для этой учетной записи.',
      infoText2:
        'Храните резервные коды в тайне и храните их в безопасности. Вы можете создать новые резервные коды, если подозреваете, что они были скомпрометированы.',
      subtitle__codelist: 'Храните их в безопасности и не сообщайте никому.',
      successMessage:
        'Резервные коды включены. Вы можете использовать один из этих кодов для входа в свою учетную запись, если вы потеряете доступ к своему аутентификационному устройству. Каждый код может быть использован только один раз.',
      successSubtitle:
        'Вы можете использовать один из этих кодов для входа в свою учетную запись, если вы потеряете доступ к своему аутентификационному устройству.',
      title: 'Добавить резервный код подтверждения',
      title__codelist: 'Резервные коды',
    },
    connectedAccountPage: {
      formHint: 'Выберите провайдера для подключения вашего аккаунта.',
      formHint__noAccounts: 'Нет доступных провайдеров внешних аккаунтов.',
      removeResource: {
        messageLine1: '{{identifier}} будет удален из вашего аккаунта.',
        messageLine2:
          'Вы больше не сможете использовать этот подключенный аккаунт, и любые зависимые функции больше не будут работать.',
        successMessage: '{{connectedAccount}} был удален из вашего аккаунта.',
        title: 'Удалить подключенный аккаунт',
      },
      socialButtonsBlockButton: 'Подключить аккаунт {{provider|titleize}}',
      successMessage: 'Провайдер был добавлен в ваш аккаунт',
      title: 'Добавить подключенный аккаунт',
    },
    deletePage: {
      actionDescription: 'Type "Delete account" below to continue.',
      confirm: 'Delete account',
      messageLine1: 'Are you sure you want to delete your account?',
      messageLine2: 'This action is permanent and irreversible.',
      title: 'Delete account',
    },
    emailAddressPage: {
      emailCode: {
        formHint: 'На этот адрес электронной почты будет отправлено письмо с верификационным кодом.',
        formSubtitle: 'Введите верификационный код, отправленный на {{identifier}}',
        formTitle: 'Верификационный код',
        resendButton: 'Отправить код повторно',
        successMessage: 'Адрес электронной почты {{identifier}} был добавлен в ваш аккаунт.',
      },
      emailLink: {
        formHint: 'На этот адрес электронной почты будет отправлена верификационная ссылка.',
        formSubtitle: 'Нажмите на верификационную ссылку в письме, отправленном на {{identifier}}',
        formTitle: 'Верификационная ссылка',
        resendButton: 'Отправить ссылку повторно',
        successMessage: 'Адрес электронной почты {{identifier}} был добавлен в ваш аккаунт.',
      },
      removeResource: {
        messageLine1: '{{identifier}} будет удален из этого аккаунта.',
        messageLine2: 'Вы больше не сможете войти с использованием этого адреса электронной почты.',
        successMessage: '{{emailAddress}} был удален из вашего аккаунта.',
        title: 'Удалить адрес электронной почты',
      },
      title: 'Добавить адрес электронной почты',
      verifyTitle: 'Verify email address',
    },
    formButtonPrimary__add: 'Add',
    formButtonPrimary__continue: 'Продолжить',
    formButtonPrimary__finish: 'Готово',
    formButtonPrimary__remove: 'Remove',
    formButtonPrimary__save: 'Save',
    formButtonReset: 'Отмена',
    mfaPage: {
      formHint: 'Выберите метод для добавления.',
      title: 'Добавить двухфакторную аутентификацию',
    },
    mfaPhoneCodePage: {
      backButton: 'Use existing number',
      primaryButton__addPhoneNumber: 'Добавить номер телефона',
      removeResource: {
        messageLine1: '{{identifier}} больше не будет получать коды подтверждения при входе в систему.',
        messageLine2: 'Ваша учетная запись будет менее защищенной. Вы уверены, что хотите продолжить?',
        successMessage: 'Двухэтапная проверка с кодом из SMS была удалена для {{mfaPhoneCode}}',
        title: 'Удалить двухэтапную проверку',
      },
      subtitle__availablePhoneNumbers: 'Выберите номер телефона для регистрации в двухэтапной проверке с кодом из SMS.',
      subtitle__unavailablePhoneNumbers:
        'Нет доступных номеров телефона для регистрации в двухэтапной проверке с кодом из SMS.',
      successMessage1:
        'When signing in, you will need to enter a verification code sent to this phone number as an additional step.',
      successMessage2:
        'Save these backup codes and store them somewhere safe. If you lose access to your authentication device, you can use backup codes to sign in.',
      successTitle: 'SMS code verification enabled',
      title: 'Добавить проверку кодом из SMS',
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: 'Вместо этого отсканируйте QR-код',
        buttonUnableToScan__nonPrimary: 'Не удается отсканировать QR-код?',
        infoText__ableToScan:
          'Настройте новый метод входа в вашем приложении аутентификации и отсканируйте следующий QR-код, чтобы связать его с вашей учетной записью.',
        infoText__unableToScan:
          'Настройте новый метод входа в вашем приложении аутентификации и введите ниже предоставленный ключ.',
        inputLabel__unableToScan1:
          'Убедитесь, что включены одноразовые пароли на основе времени, затем завершите связывание своей учетной записи.',
        inputLabel__unableToScan2:
          'Кроме того, если ваше приложение аутентификации поддерживает URI TOTP, вы также можете скопировать полный URI.',
      },
      removeResource: {
        messageLine1:
          'Верификационный код из этого приложения аутентификации больше не потребуется при входе в систему.',
        messageLine2: 'Ваш аккаунт будет менее защищенным. Вы уверены, что хотите продолжить?',
        successMessage: 'Двухэтапная аутентификация через приложение аутентификации была удалена.',
        title: 'Удаление двухэтапной аутентификации',
      },
      successMessage:
        'Двухэтапная проверка в настоящее время включена. При входе в систему вам нужно будет ввести верификационный код из этого приложения в качестве дополнительного шага.',
      title: 'Добавить приложение аутентификации',
      verifySubtitle: 'Введите верификационный код, созданный вашим приложением аутентификации',
      verifyTitle: 'Верификационный код',
    },
    mobileButton__menu: 'Меню',
    navbar: {
      account: 'Profile',
      description: 'Manage your account info.',
      security: 'Security',
      title: 'Account',
    },
    passwordPage: {
      checkboxInfoText__signOutOfOtherSessions:
        'It is recommended to sign out of all other devices which may have used your old password.',
      readonly: 'Your password can currently not be edited because you can sign in only via the enterprise connection.',
      successMessage__set: 'Ваш пароль установлен.',
      successMessage__signOutOfOtherSessions: 'Все другие устройства были выведены из системы.',
      successMessage__update: 'Ваш пароль был обновлен.',
      title__set: 'Установить пароль',
      title__update: 'Изменить пароль',
    },
    phoneNumberPage: {
      infoText: 'На этот номер телефона будет отправлено текстовое сообщение с верификационной ссылкой.',
      removeResource: {
        messageLine1: '{{identifier}} будет удален из этой учетной записи.',
        messageLine2: 'Вы больше не сможете войти, используя этот номер телефона.',
        successMessage: '{{phoneNumber}} был удален из вашей учетной записи.',
        title: 'Удалить номер телефона',
      },
      successMessage: '{{identifier}} был добавлен к вашей учетной записи.',
      title: 'Добавить номер телефона',
      verifySubtitle: 'Enter the verification code sent to {{identifier}}',
      verifyTitle: 'Verify phone number',
    },
    profilePage: {
      fileDropAreaHint: 'Загрузите изображение в форматах JPG, PNG, GIF или WEBP размером меньше 10 МБ',
      imageFormDestructiveActionSubtitle: 'Удалить изображение',
      imageFormSubtitle: 'Загрузить изображение',
      imageFormTitle: 'Изображение профиля',
      readonly: 'Your profile information has been provided by the enterprise connection and cannot be edited.',
      successMessage: 'Ваш профиль был обновлен.',
      title: 'Обновить профиль',
    },
    start: {
      activeDevicesSection: {
        destructiveAction: 'Выйти из устройства',
        title: 'Активные устройства',
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: 'Попробовать снова',
        actionLabel__reauthorize: 'Авторизовать сейчас',
        destructiveActionTitle: 'Удалить',
        primaryButton: 'Подключить аккаунт',
        subtitle__reauthorize:
          'The required scopes have been updated, and you may be experiencing limited functionality. Please re-authorize this application to avoid any issues',
        title: 'Подключенные аккаунты',
      },
      dangerSection: {
        deleteAccountButton: 'Delete Account',
        title: 'Account termination',
      },
      emailAddressesSection: {
        destructiveAction: 'Удалить адрес электронной почты',
        detailsAction__nonPrimary: 'Установить в качестве основного',
        detailsAction__primary: 'Завершить проверку',
        detailsAction__unverified: 'Завершить проверку',
        primaryButton: 'Добавить адрес электронной почты',
        title: 'Адреса электронной почты',
      },
      enterpriseAccountsSection: {
        title: 'Enterprise accounts',
      },
      headerTitle__account: 'Аккаунт',
      headerTitle__security: 'Безопасность',
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: 'Сгенерировать коды',
          headerTitle: 'Резервные коды',
          subtitle__regenerate:
            'Получите новый набор безопасных резервных кодов. Предыдущие резервные коды будут удалены и не могут быть использованы.',
          title__regenerate: 'Сгенерировать новые резервные коды',
        },
        phoneCode: {
          actionLabel__setDefault: 'Установить по умолчанию',
          destructiveActionLabel: 'Удалить номер телефона',
        },
        primaryButton: 'Добавить двухфакторную аутентификацию',
        title: 'Двухфакторная аутентификация',
        totp: {
          destructiveActionTitle: 'Удалить',
          headerTitle: 'Приложение аутентификации',
        },
      },
      passwordSection: {
        primaryButton__setPassword: 'Установить пароль',
        primaryButton__updatePassword: 'Изменить пароль',
        title: 'Пароль',
      },
      phoneNumbersSection: {
        destructiveAction: 'Удалить номер телефона',
        detailsAction__nonPrimary: 'Установить как основной',
        detailsAction__primary: 'Завершить верификацию',
        detailsAction__unverified: 'Завершить верификацию',
        primaryButton: 'Добавить номер телефона',
        title: 'Номера телефонов',
      },
      profileSection: {
        primaryButton: '',
        title: 'Профиль',
      },
      usernameSection: {
        primaryButton__setUsername: 'Установить имя пользователя',
        primaryButton__updateUsername: 'Изменить имя пользователя',
        title: 'Имя пользователя',
      },
      web3WalletsSection: {
        destructiveAction: 'Удалить кошелек',
        primaryButton: 'Web3 кошельки',
        title: 'Web3 кошельки',
      },
    },
    usernamePage: {
      successMessage: 'Имя пользователя было обновлено.',
      title__set: 'Обновить имя пользователя',
      title__update: 'Обновить имя пользователя',
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: '{{identifier}} будет удален из этой учетной записи.',
        messageLine2: 'Вы больше не сможете Войти с использованием этого web3 кошелька.',
        successMessage: '{{web3Wallet}} был удален из вашей учетной записи.',
        title: 'Удалить web3 кошелек',
      },
      subtitle__availableWallets: 'Выберите web3 кошелек для подключения к вашей учетной записи.',
      subtitle__unavailableWallets: 'Нет доступных web3 кошельков.',
      successMessage: 'Кошелек был добавлен к вашей учетной записи.',
      title: 'Добавить web3 кошелек',
    },
  },
} as const;
