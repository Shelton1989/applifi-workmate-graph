"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdatemediaUrlInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PostUpdatemediaUrlInput = class PostUpdatemediaUrlInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdatemediaUrlInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostUpdatemediaUrlInput.prototype, "push", void 0);
PostUpdatemediaUrlInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdatemediaUrlInput", {
        isAbstract: true
    })
], PostUpdatemediaUrlInput);
exports.PostUpdatemediaUrlInput = PostUpdatemediaUrlInput;
