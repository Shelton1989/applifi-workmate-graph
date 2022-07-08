"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestCreatesocialLinksInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RequestCreatesocialLinksInput = class RequestCreatesocialLinksInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], RequestCreatesocialLinksInput.prototype, "set", void 0);
RequestCreatesocialLinksInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestCreatesocialLinksInput", {
        isAbstract: true
    })
], RequestCreatesocialLinksInput);
exports.RequestCreatesocialLinksInput = RequestCreatesocialLinksInput;
