"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestCreateInput_1 = require("../../../inputs/RequestCreateInput");
let CreateRequestArgs = class CreateRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCreateInput_1.RequestCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestCreateInput_1.RequestCreateInput)
], CreateRequestArgs.prototype, "data", void 0);
CreateRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateRequestArgs);
exports.CreateRequestArgs = CreateRequestArgs;
