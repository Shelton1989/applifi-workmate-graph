"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUpdatesocialLinksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RequestUpdatesocialLinksInput = class RequestUpdatesocialLinksInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestUpdatesocialLinksInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestUpdatesocialLinksInput.prototype, "push", void 0);
RequestUpdatesocialLinksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestUpdatesocialLinksInput", {
        isAbstract: true
    })
], RequestUpdatesocialLinksInput);
exports.RequestUpdatesocialLinksInput = RequestUpdatesocialLinksInput;
