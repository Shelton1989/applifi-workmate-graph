"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQueryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QueryCreateInput_1 = require("../../../inputs/QueryCreateInput");
let CreateQueryArgs = class CreateQueryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryCreateInput_1.QueryCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QueryCreateInput_1.QueryCreateInput)
], CreateQueryArgs.prototype, "data", void 0);
CreateQueryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateQueryArgs);
exports.CreateQueryArgs = CreateQueryArgs;
