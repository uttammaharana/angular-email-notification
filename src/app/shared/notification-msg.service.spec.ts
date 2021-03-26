import { TestBed } from '@angular/core/testing';

import { NotificationMsgService } from './notification-msg.service';

describe('NotificationMsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationMsgService = TestBed.get(NotificationMsgService);
    expect(service).toBeTruthy();
  });
});
