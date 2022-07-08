"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestCreateManyInput_1 = require("../../../inputs/RequestCreateManyInput");
let CreateManyRequestArgs = class CreateManyRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestCreateManyInput_1.RequestCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyRequestArgs.prototype, "data", void 0);
CreateManyRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyRequestArgs);
exports.CreateManyRequestArgs = CreateManyRequestArgs;
